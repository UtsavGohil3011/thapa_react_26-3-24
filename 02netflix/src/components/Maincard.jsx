import Cardutsav from "./Cardutsav";

function Maincard(props) {
  return (
    <>
      <div className="cardindex">
        {/* (window + .) ❤️🟣 */}
        {/* <Cardutsav name={Carddata[0].name} gener={Carddata[0].gener} source={Carddata[0].source}/>
        <Cardutsav name='Vikings' gener='Historical' source={require('./images/vk.jpeg')} />
        <Cardutsav  name='Stranger Things' gener='mystrery' source={require('./images/st.jpeg')} />
        <Cardutsav  name='Aarya' gener='crime and thriller' source={require('./images/aarya.jpeg')} /> */}

        {props.Carddata.map((e) => {
          return (
            <Cardutsav
              name={e.name}
              gener={e.gener}
              source={e.source}
              path={e.path}
            />
          );
        })}
      </div>
    </>
  );
}

export default Maincard;
