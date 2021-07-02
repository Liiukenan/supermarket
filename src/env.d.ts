interface ImportMetaEnv {
  VITE_APP_TITLE: string
  env: {
    GITHUB_AUTH_TOKEN: string
    NODE_ENV: 'developments' | 'productions'
    PORT?: string
    PWD: string
  }
}
