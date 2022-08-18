import React from "react";
import Documentacao from "../../layout/Documentacao";

class ComponentePai extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            weather: []
        };
    }

    componentDidMount(){
        fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0').then(res=> res.json()).then(
            result=>(
                this.setState({weather: result.dataseries})
            )
        )
    }

    render() {
        return (<div>

              <Documentacao
                titulo="Calling REST API"
                subtitulo="How to consuming rest api using fetch"
                descricao="https://www.pragimtech.com/blog/reactjs/calling-rest-api-from-react/"></Documentacao>

            <h2>Clima tempo steel</h2>
            <table>
                <thead>
                    <tr>
                        <th>timepoint</th>
                        <th>cloudcover</th>
                        <th>seeing</th>
                        <th>transparency</th>
                        <th>lifted_index</th>
                        <th>rh2m</th>
                        <th>temp2m</th>
                        <th>prec_type</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.weather.map(w => (
                        <tr>
                            <th>{w.timepoint}</th>
                            <th>{w.cloudcover}</th>
                            <th>{w.seeing}</th>
                            <th>{w.transparenscy}</th>
                            <th>{w.lifted_index}</th>
                            <th>{w.rh2m}</th>
                            <th>{w.temp2m}</th>
                            <th>{w.prec_type}</th>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        )
    }

}

export default ComponentePai;