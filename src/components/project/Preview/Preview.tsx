import { FC } from 'react'

import { useStyles } from 'src/hooks'

import classes from './Preview.module.css'

interface PreviewProps {
  className?: string
}

const Preview: FC<PreviewProps> = ({ className }) => {
  const previewClasses = useStyles(classes.preview, className)

  return <div className={previewClasses}>Preview</div>
}

export default Preview
