'use client';

import { useId } from 'react';
import styles from './BrandPattern.module.css';

const TEAL = '#00A5A5';
const GREEN = '#00CE67';

/**
 * T Jar brand patterns — built only from the logo's own geometry.
 * The «ج» glyph (top bar with its short hook, the diagonal, the base) is
 * the recurring motif; `lines` also uses the ر hook, the ي step and the dot.
 *
 * Each variant is one repeating tile. Drift animations move exactly one
 * tile, so they loop seamlessly.
 */
const VARIANTS = {
  /** Loose, colourful scatter (legal page headers). */
  lines: {
    width: 168,
    height: 168,
    drift: 'xy',
    tile: (
      <>
        <g fill="none" strokeWidth="5.4">
          <path d="M40 18v36a10 10 0 0 1-10 10H12" stroke={TEAL} />
          <path d="M96 132 142 96" stroke={TEAL} />
          <path d="M152 18h-22a6 6 0 0 0-6 6v4a6 6 0 0 0 6 6h14a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6h-22" stroke={GREEN} />
          <path d="M58 118h20M18 150h14" stroke={TEAL} />
        </g>
        <path d="m80 58 8 8-8 8-8-8Z" fill={GREEN} />
      </>
    ),
  },
  /** Quiet monochrome texture: «ج» glyphs mirrored row by row (footer background). */
  weave: {
    width: 64,
    height: 64,
    drift: 'none',
    tile: (
      <g fill="none" stroke="#fff" strokeWidth="2">
        <path d="M6 14V8h20L6 28h20" />
        <path d="M58 14V8H38l20 20H38" />
        <path d="M26 46v-6H6l20 20H6" />
        <path d="M38 46v-6h20L38 60h20" />
      </g>
    ),
  },
  /** Bold «ج» border in both brand colours (footer base). */
  band: {
    width: 56,
    height: 34,
    drift: 'x',
    tile: (
      <g fill="none" strokeWidth="3.6" strokeLinejoin="miter">
        <path d="M4 12V6h20L4 28h20" stroke={TEAL} />
        <path d="M52 12V6H32l20 22H32" stroke={GREEN} />
      </g>
    ),
  },
};

/** Decorative; sized to its container so it can never cause overflow. */
export default function BrandPattern({ variant = 'lines', className, animated = true }) {
  // useId output contains characters that are not safe inside url(#…).
  const id = `tjar-pattern-${useId().replace(/[^\w-]/g, '')}`;
  const { width, height, drift, tile } = VARIANTS[variant];
  const moving = animated && drift !== 'none';
  const layerClass = [styles.layer, moving && styles[`drift-${drift}`]].filter(Boolean).join(' ');

  return (
    <span className={[styles.frame, className].filter(Boolean).join(' ')} aria-hidden="true">
      {/* The moving layer is a plain box (not the SVG) so its size always follows its insets. */}
      <span className={layerClass} style={{ '--tile-w': `${width}px`, '--tile-h': `${height}px` }}>
        <svg className={styles.svg} focusable="false">
          <defs>
            <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse">
              {tile}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </span>
    </span>
  );
}
