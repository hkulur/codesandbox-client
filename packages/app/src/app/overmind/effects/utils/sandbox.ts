import { Sandbox } from '@codesandbox/common/lib/types';

export function transformSandbox(sandbox: Sandbox) {
  // We need to add client side properties for tracking
  return {
    ...sandbox,
    modules: sandbox.modules.map(module => ({
      ...module,
      savedCode: null,
      isNotSynced: false,
      errors: [],
      corrections: [],
      type: 'file' as 'file',
    })),
    directories: sandbox.directories.map(directory => ({
      ...directory,
      type: 'directory' as 'directory',
    })),
  };
}
