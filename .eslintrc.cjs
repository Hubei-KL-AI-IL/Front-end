module.exports = {
  root: true,
  env: {
    es2020: true,
    node: true,
    browser: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    parser: '@babel/eslint-parser', // 指定 eslint 可以解析 JSX 语法。
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'arrow-body-style': 'off', // 不强制在箭头函数体周围使用大括号。
    'no-console': 'off', // 关闭使用 console 报错。
    'no-undef': 'warn', // 使用 undefined 时警告。
    'no-shadow': 'off', // 允许变量覆盖声明。
    'react/jsx-uses-react': 'off', // 无须在组件中显式 import React。
    'react/react-in-jsx-scope': 'off', // 确保已经正确引入了 React 库。
    '@typescript-eslint/no-explicit-any': ['off'], // 允许使用 any 类型。
    'no-unused-vars': 'warn', // 允许使用未使用的变量。
    'no-unused-expressions': [
      'warn',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ], // 允许使用短路、三目运算。
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ], // 函数形参可修改。
  },
};
