import React, { Component } from 'react'

const birimler = {

    "c":"celcius",
    "f": "fahrenheit"
};

export class Sicaklik extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Sicaklik: props.deger
        };
        //degerGirildi metodu içinde this , class a referans versin
        this.degerGirildi = this.degerGirildi.bind(this);
    }
    render() {
        const birimAd = birimler[this.props.birim];

        return (
            <fieldset>
                <legend>Sıcaklık ({birimAd})</legend>
                <input type="number" value={this.props.deger} onChange={this.degerGirildi}/>
            </fieldset>
        )
    }

        degerGirildi(e) {
            this.setState({Sicaklik: e.target.value});
            this.props.sicaklikDegistiginde(e.target.value);
        }

}
export default Sicaklik;