type UseStylesType = (...args: (string | undefined)[]) => string | undefined

const useStyles: UseStylesType = (...args) => {
  const styles = [...args]
  if (!styles.length) return undefined
  return styles.filter(style => style).join(' ')
}

export default useStyles
