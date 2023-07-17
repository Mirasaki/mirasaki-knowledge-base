const GalleryContainer = ({
  children,
  style = {},
  ...props
}) => {
  return (<div style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    ...style
  }} {...props}>
    {children}
  </div>)
};

export default GalleryContainer;
