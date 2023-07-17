const Separator = ({ style={}, ...props }) => {
  return (<div style={{
    width: '100%',
    height: '10px',
    backgroundColor: 'skyblue',
    borderRadius: '5px',
    margin: '1rem auto',
    ...style
  }} {...props}/>)
};

export default Separator;
