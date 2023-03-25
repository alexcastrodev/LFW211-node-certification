const dependencyAsset = await import.meta.resolve('tap');

console.log(
  `import 'tap'`,
  '=>',
  dependencyAsset
)
