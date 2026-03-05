import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getAllBlogPosts, getBlogPostById } from '@/lib/blog';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

function renderMarkdown(content: string): ReactNode[] {
  const blocks = content.split(/\n\s*\n/);

  return blocks
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      if (block.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold tracking-tight text-slate-900">
            {block.replace(/^#\s+/, '')}
          </h1>
        );
      }

      if (block.startsWith('## ')) {
        return (
          <h2 key={index} className="mt-8 text-2xl font-semibold text-slate-900">
            {block.replace(/^##\s+/, '')}
          </h2>
        );
      }

      if (block.startsWith('### ')) {
        return (
          <h3 key={index} className="mt-6 text-xl font-semibold text-slate-900">
            {block.replace(/^###\s+/, '')}
          </h3>
        );
      }

      const listItems = block
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.startsWith('- '));

      if (listItems.length > 0 && listItems.length === block.split('\n').length) {
        return (
          <ul key={index} className="ml-6 list-disc space-y-2 text-slate-700">
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex}>{item.replace(/^-\s+/, '')}</li>
            ))}
          </ul>
        );
      }

      return (
        <p key={index} className="text-lg leading-relaxed text-slate-700">
          {block}
        </p>
      );
    });
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    return { title: 'Matéria não encontrada' };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ id: post.id }));
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-10">
        <p className="text-sm uppercase tracking-[0.16em] text-slate-500">Publicado em {post.date}</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">{post.title}</h1>
        <p className="mt-4 text-xl text-slate-700">{post.description}</p>
      </header>

      <div className="space-y-6">{renderMarkdown(post.content)}</div>
    </article>
  );
}
