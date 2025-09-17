export const isCurPath = (curPath: string, to: string) => {
  return (
    (curPath === '/' && to === '/') ||
    (curPath === '/en' && to === '/en') ||
    (curPath === '/zh' && to === '/zh') ||
    (curPath?.startsWith(to as string) &&
      to !== '/' &&
      to !== '/en' &&
      to !== '/zh')
  )
}

export const isCurProfilePath = (curPath: string, to: string) => {
  return (
    (curPath === '/profile' && (to === '/profile') || to === '/profile/edit') ||
    (curPath === '/en/profile' && (to === '/en/profile' || to === '/en/profile/edit')) ||
    (curPath === '/zh/profile' && (to === '/zh/profile' || to === '/zh/profile/edit')) ||
    (curPath.startsWith(to) &&
      to !== '/profile' &&
      to !== '/en/profile' &&
      to !== '/zh/profile')
  )
}
