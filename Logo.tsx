/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import React from 'react';

const Logo = () => (
  <a href="#" className="flex items-center space-x-2" aria-label="Impocm Home">
    <svg
      width="36"
      height="36"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-9 w-9"
      aria-hidden="true"
    >
      <path
        d="M8 10 C8 6, 12 2, 20 2 C28 2, 32 6, 32 10 L32 20 C32 28, 28 38, 20 38 C12 38, 8 28, 8 20 Z"
        fill="#3B82F6"
      />
      <path
        d="M20 28 C23.3137 28 26 25.3137 26 22 C26 18 20 12 20 12 C20 12 14 18 14 22 C14 25.3137 16.6863 28 20 28 Z"
        fill="white"
      />
    </svg>
    <span className="text-2xl font-bold text-gray-800 tracking-tight">Impocm</span>
  </a>
);

export default Logo;
