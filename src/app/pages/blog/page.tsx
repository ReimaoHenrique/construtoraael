import { CardImage } from '@/components/blocks/CardProject';
import { getAllBlogPosts } from '@/lib/blog';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <header className="mb-12 text-center">
        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-slate-500">Blog</p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Matérias e conteúdos</h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-700">
          Acompanhe novidades, bastidores de obras e conteúdos técnicos da Andrade & Lima.
        </p>
      </header>

      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post) => (
          <CardImage
            key={post.id}
            title={post.title}
            description={post.description}
            image={post.image}
            cta={post.cta}
            slug={post.id}
            hrefPrefix="/blog"
          />
        ))}
      </div>
    </section>
  );
}
