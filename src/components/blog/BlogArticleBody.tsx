import Image from 'next/image';

interface BlogArticleBodyProps {
  content: string;
  gallery: string[];
}

function renderMarkdownBlocks(content: string): React.ReactNode[] {
  const blocks = content.split(/\n\s*\n/);

  return blocks
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, index) => {
      if (block.startsWith('# ')) {
        return (
          <h2 key={index} className="text-3xl font-bold tracking-tight text-slate-900">
            {block.replace(/^#\s+/, '')}
          </h2>
        );
      }

      if (block.startsWith('## ')) {
        return (
          <h3 key={index} className="mt-8 text-2xl font-semibold text-slate-900">
            {block.replace(/^##\s+/, '')}
          </h3>
        );
      }

      if (block.startsWith('### ')) {
        return (
          <h4 key={index} className="mt-6 text-xl font-semibold text-slate-900">
            {block.replace(/^###\s+/, '')}
          </h4>
        );
      }

      const lines = block.split('\n').map((line) => line.trim());
      const listItems = lines.filter((line) => line.startsWith('- '));

      if (listItems.length > 0 && listItems.length === lines.length) {
        return (
          <ul key={index} className="ml-6 list-disc space-y-2 text-lg leading-relaxed text-slate-700">
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

export function BlogArticleBody({ content, gallery }: BlogArticleBodyProps) {
  return (
    <section className="space-y-10">
      <div className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 md:p-10 shadow-sm space-y-6">
        {renderMarkdownBlocks(content)}
      </div>

      {gallery.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-slate-900">Galeria da matéria</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {gallery.map((image, index) => (
              <div key={`${image}-${index}`} className="relative h-56 overflow-hidden rounded-xl">
                <Image
                  src={image}
                  alt={`Imagem da matéria ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
