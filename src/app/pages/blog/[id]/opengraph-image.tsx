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
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
            color: '#fff',
            fontSize: 56,
            fontWeight: 800,
          }}
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
          background: '#020617',
          color: '#fff',
          overflow: 'hidden',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {coverDataUrl && (
          <img
            src={coverDataUrl}
            alt={post.title}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        )}

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(2,6,23,0.88) 18%, rgba(2,6,23,0.55) 62%, rgba(2,6,23,0.82) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '100%',
            padding: '48px 56px',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 16px',
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.35)',
              background: 'rgba(15,23,42,0.42)',
              fontSize: 22,
              fontWeight: 700,
              width: 'fit-content',
            }}
          >
            Blog Construtora A&L
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 980 }}>
            <div
              style={{
                fontSize: 60,
                lineHeight: 1.03,
                letterSpacing: -1.2,
                fontWeight: 800,
              }}
            >
              {post.title}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {authorDataUrl && (
              <img
                src={authorDataUrl}
                alt={post.author.name}
                style={{
                  width: 66,
                  height: 66,
                  borderRadius: 999,
                  objectFit: 'cover',
                  border: '2px solid rgba(255,255,255,0.75)',
                }}
              />
            )}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: 24, fontWeight: 700 }}>{post.author.name}</span>
              <span style={{ fontSize: 20, color: 'rgba(226,232,240,0.94)' }}>construtoraael.com</span>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}

