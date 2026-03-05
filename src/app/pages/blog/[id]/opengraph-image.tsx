import { promises as fs } from 'fs';
import path from 'path';
import { ImageResponse } from 'next/og';
import { getBlogPostById } from '@/lib/blog';

export const runtime = 'nodejs';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

function getMimeType(filePath: string): string {
  if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) return 'image/jpeg';
  if (filePath.endsWith('.png')) return 'image/png';
  if (filePath.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
}

async function readPublicImageAsDataUrl(publicPath: string): Promise<string | null> {
  if (!publicPath.startsWith('/')) return null;

  const normalizedPath = publicPath.replace(/^\/+/, '');
  const absolutePath = path.join(process.cwd(), 'public', normalizedPath);

  try {
    const file = await fs.readFile(absolutePath);
    const mimeType = getMimeType(absolutePath.toLowerCase());
    return `data:${mimeType};base64,${file.toString('base64')}`;
  } catch {
    return null;
  }
}

interface BlogOgImageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogOgImage({ params }: BlogOgImageProps) {
  const { id } = await params;
  const post = await getBlogPostById(id);

  if (!post) {
    return new ImageResponse(
      (
        <div
          style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f7f3', color: '#111827', fontSize: 56, fontWeight: 800 }}
        >
          Blog A&L
        </div>
      ),
      size,
    );
  }

  const [coverDataUrl, authorDataUrl] = await Promise.all([
    readPublicImageAsDataUrl(post.heroImage || post.image),
    readPublicImageAsDataUrl(post.author.foto),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          background: '#f8f7f3',
          color: '#111827',
          overflow: 'hidden',
          fontFamily: 'Georgia, Times New Roman, serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
            padding: 48,
            gap: 28,
          }}
        >
          <div
            style={{
              width: '66%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              border: '1px solid #e5e7eb',
              borderRadius: 22,
              background: '#ffffff',
              padding: '38px 40px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    background: '#111827',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Arial, sans-serif',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  A&L
                </div>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 18, color: '#374151' }}>
                  Blog Andrade & Lima
                </span>
              </div>
              <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 16, color: '#6b7280' }}>
                {post.date}
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div
                style={{
                  fontSize: 58,
                  lineHeight: 1.02,
                  letterSpacing: -1,
                  fontWeight: 700,
                  color: '#111827',
                }}
              >
                {post.title}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
              }}
            >
              {authorDataUrl && (
                <img
                  src={authorDataUrl}
                  alt={post.author.name}
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 999,
                    objectFit: 'cover',
                    border: '1px solid #d1d5db',
                  }}
                />
              )}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 20, fontWeight: 700 }}>
                  {post.author.name}
                </span>
                <span style={{ fontFamily: 'Arial, sans-serif', fontSize: 16, color: '#6b7280' }}>
                  Engenheiro Civil • Construtora A&L
                </span>
              </div>
            </div>
          </div>

          <div
            style={{
              width: '34%',
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
            }}
          >
            <div
              style={{
                flex: 1,
                borderRadius: 22,
                border: '1px solid #e5e7eb',
                overflow: 'hidden',
                background: '#e5e7eb',
              }}
            >
              {coverDataUrl ? (
                <img
                  src={coverDataUrl}
                  alt={post.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Arial, sans-serif',
                    color: '#6b7280',
                    fontSize: 18,
                  }}
                >
                  Sem capa
                </div>
              )}
            </div>

            <div
              style={{
                height: 52,
                borderRadius: 14,
                border: '1px solid #e5e7eb',
                background: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Arial, sans-serif',
                fontSize: 16,
                color: '#4b5563',
              }}
            >
              construtoraael.com
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
