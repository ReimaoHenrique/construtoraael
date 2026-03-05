import { promises as fs } from 'fs';
import path from 'path';

const BLOG_DIR = path.join(process.cwd(), 'src/data/blog');

export interface BlogPostMeta {
  id: string;
  title: string;
  description: string;
  image: string;
  cta: string;
  date: string;
}

export interface BlogPost extends BlogPostMeta {
  content: string;
}

function parseFrontmatter(rawContent: string): { data: Record<string, string>; content: string } {
  if (!rawContent.startsWith('---')) {
    return { data: {}, content: rawContent.trim() };
  }

  const sections = rawContent.split('---');
  const frontmatter = sections[1] ?? '';
  const content = sections.slice(2).join('---').trim();

  const data = frontmatter
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((acc, line) => {
      const separatorIndex = line.indexOf(':');
      if (separatorIndex === -1) return acc;

      const key = line.slice(0, separatorIndex).trim();
      const value = line.slice(separatorIndex + 1).trim();
      acc[key] = value;
      return acc;
    }, {});

  return { data, content };
}

function sortByDateDesc(a: BlogPostMeta, b: BlogPostMeta): number {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export async function getAllBlogPosts(): Promise<BlogPostMeta[]> {
  const files = await fs.readdir(BLOG_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith('.md'))
      .map(async (file) => {
        const id = file.replace(/\.md$/, '');
        const fullPath = path.join(BLOG_DIR, file);
        const raw = await fs.readFile(fullPath, 'utf8');
        const { data } = parseFrontmatter(raw);

        return {
          id,
          title: data.title ?? id,
          description: data.description ?? 'Sem descrição cadastrada.',
          image: data.image ?? '/Projetos.jpg',
          cta: data.cta ?? 'Ler matéria',
          date: data.date ?? '1970-01-01',
        } satisfies BlogPostMeta;
      }),
  );

  return posts.sort(sortByDateDesc);
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${id}.md`);

  try {
    const raw = await fs.readFile(filePath, 'utf8');
    const { data, content } = parseFrontmatter(raw);

    return {
      id,
      title: data.title ?? id,
      description: data.description ?? 'Sem descrição cadastrada.',
      image: data.image ?? '/Projetos.jpg',
      cta: data.cta ?? 'Ler matéria',
      date: data.date ?? '1970-01-01',
      content,
    };
  } catch {
    return null;
  }
}
