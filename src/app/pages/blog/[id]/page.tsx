import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { BookOpenText, Linkedin } from 'lucide-react';
import { BlogArticleBody } from '@/components/blog/BlogArticleBody';
import { getAllBlogPosts, getBlogPostById } from '@/lib/blog';

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
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
    openGraph: {
      images: [`/blog/${id}/opengraph-image`],
    },
    twitter: {
      images: [`/blog/${id}/opengraph-image`],
    },
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
    <article className="pb-16">
      <section className="relative h-[48vh] min-h-[360px] w-full overflow-hidden">
        <Image src={post.heroImage} alt={post.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-6 pb-10 text-white">
            <p className="text-sm uppercase tracking-[0.16em] text-slate-200">Publicado em {post.date}</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{post.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-slate-100 md:text-xl">{post.description}</p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full bg-black/40 px-4 py-2 backdrop-blur">
              <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-white/50">
                <Image src={post.author.foto} alt={post.author.name} fill className="object-cover" />
              </div>
              <span className="text-sm text-slate-200">Por {post.author.name}</span>
              <a
                href={post.author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${post.author.name}`}
                title="LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={post.author.medium}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Medium de ${post.author.name}`}
                title="Medium"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white hover:bg-white/10"
              >
                <BookOpenText className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-5xl px-6">
        <BlogArticleBody content={post.content} gallery={post.gallery} />
      </section>
    </article>
  );
}
