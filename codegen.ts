import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/graphql',
  // documents: 'src/graphql/*.ts',
  documents: 'src/graphql/*.graphql',
  generates: {
    'src/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      hooks: {
        afterOneFileWrite: 'prettier --write',
      },
    },
  },
}

export default config
