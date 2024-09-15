// @ts-ignore
import type { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import React from "react";

const config: DocsThemeConfig = {
  project: {
    // 右上角 icon 跳转
    link: "https://github.com/mollycai",
  },
  // 文档仓库链接
  docsRepositoryBase: "https://github.com/mollycai/mollycai.github.io/pages",
  // html头部
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Molly" />
      <meta property="og:description" content="The next site builder" />
			<link rel="icon" href="/favicon.ico" type="image/ico"/>
    </>
  ),
  // logo
  logo: (
    <>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        ></path>
      </svg>
      <span style={{ marginLeft: ".4em", fontWeight: 800 }}>Molly Cai</span>
    </>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        // 设置浏览器标题
        titleTemplate: "%s – Molly Notes",
      };
    }
  },
  // 问题反馈配置，可以自动跳转到 github issue
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback",
    useLink: () => {
      return "https://github.com/mollycai/mollycai.github.io/issues";
    },
  },
  // 页脚版权信息
  footer: {
    text: `MIT 2024 © Molly.`,
  },
};

export default config;
