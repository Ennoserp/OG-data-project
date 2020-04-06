import { Component, OnInit, Output } from '@angular/core';
import { Country } from '../country';
import { CountryService } from '../country.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

declare var google;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  countries: Country[];
  //listCountries: any[][]= [['',0]];

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.getCountries();



    // for (let i = 0; i < this.listCountries.length; i++) {
    //   var a = this.countries[i].nation;
    //   var b = this.countries[i].medal;
    //   this.listCountries.push([a,b]);
    //   console.log(this.listCountries[i]);
      

    // }
    // this.listCountries.shift();
    

    google.charts.load('current', {
      'packages':['geomap'],
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
    });
    google.charts.setOnLoadCallback(drawRegionsMap);
    function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable([
        ["Country", "Number of medals"],
        ["Afghanistan", 2],
        ["Albania", 0],
        ["Algeria", 17],
        ["American Samoa", 0],
        ["Andorra", 0],
        ["Angola", 0],
        ["Antigua and Barbuda", 0],
        ["Argentina", 74],
        ["Armenia", 14],
        ["Aruba", 0],
        ["Australia", 512],
        ["Austria", 319],
        ["Azerbaijan", 43],
        ["Bahamas", 14],
        ["Bahrain", 3],
        ["Bangladesh", 0],
        ["Barbados", 1],
        ["Belarus", 96],
        ["Belgium", 154],
        ["Belize", 0],
        ["Benin", 0],
        ["Bermuda", 1],
        ["Bhutan", 0],
        ["Bohemia", 4],
        ["Bolivia", 0],
        ["Bosnia and Herzegovina", 0],
        ["Botswana", 1],
        ["Brazil", 129],
        ["British Virgin Islands", 0],
        ["British West Indies", 2],
        ["Brunei", 0],
        ["Bulgaria", 224],
        ["Burkina Faso", 0],
        ["Burundi", 2],
        ["Cambodia", 0],
        ["Cameroon", 6],
        ["Canada", 501],
        ["Cape Verde", 0],
        ["Cayman Islands", 0],
        ["Central African Republic", 0],
        ["Chad", 0],
        ["Chile", 13],
        ["China", 608],
        ["China, Republic of", 0],
        ["Chinese Taipei", 24],
        ["Colombia", 22],
        ["Comoros", 0],
        ["CG", 0],
        ["Cook Islands", 0],
        ["Costa Rica", 4],
        ["Croatia", 44],
        ["Cuba", 226],
        ["Cyprus", 1],
        ["Czech Republic", 87],
        ["Czechoslovakia", 168],
        ["Denmark", 195],
        ["Djibouti", 1],
        ["Dominica", 0],
        ["Dominican Republic", 7],
        ["CD", 0],
        ["East Timor", 0],
        ["Ecuador", 2],
        ["Egypt", 32],
        ["El Salvador", 0],
        ["Equatorial Guinea", 0],
        ["Eritrea", 1],
        ["Estonia", 41],
        ["Ethiopia", 54],
        ["Fiji", 1],
        ["Finland", 470],
        ["France", 840],
        ["Gabon", 1],
        ["Georgia", 33],
        ["Germany", 855],
        // ["Germany, East", 519],
        // ["Germany, United Team of", 137],
        // ["Germany, West", 243],
        ["Ghana", 4],
        ["GB", 883],
        ["Greece", 116],
        ["Grenada", 2],
        ["Guam", 0],
        ["Guatemala", 1],
        ["Guinea", 0],
        ["Guinea-Bissau", 0],
        ["Guyana", 1],
        ["Haiti", 2],
        ["Honduras", 0],
        ["Hong Kong", 3],
        ["Hungary", 498],
        ["Iceland", 4],
        ["Independent Olympic Participants", 21],
        ["India", 28],
        ["Indonesia", 32],
        ["Iran", 69],
        ["Iraq", 1],
        ["Ireland", 31],
        ["Israel", 9],
        ["Italy", 701],
        ["Ivory Coast", 3],
        ["Jamaica", 78],
        ["Japan", 497],
        ["Jordan", 1],
        ["Kazakhstan", 71],
        ["Kenya", 103],
        ["Kiribati", 0],
        ["Korea", 0],
        ["Korea North", 56],
        ["Korea South", 337],
        ["Kosovo", 1],
        ["Kuwait", 2],
        ["Kyrgyzstan", 4],
        ["Laos", 0],
        ["Latvia", 28],
        ["Lebanon", 4],
        ["Lesotho", 0],
        ["Liberia", 0],
        ["Libya", 0],
        ["Liechtenstein", 10],
        ["Lithuania", 26],
        ["Luxembourg", 4],
        ["Macedonia", 1],
        ["Madagascar", 0],
        ["Malawi", 0],
        ["Malaya", 0],
        ["Malaysia", 11],
        ["Maldives", 0],
        ["Mali", 0],
        ["Malta", 0],
        ["Marshall Islands", 0],
        ["Mauritania", 0],
        ["Mauritius", 1],
        ["Mexico", 69],
        ["Micronesia Federated States of", 0],
        ["Moldova", 5],
        ["Monaco", 0],
        ["Mongolia", 26],
        ["Montenegro", 1],
        ["Morocco", 23],
        ["Mozambique", 2],
        ["Myanmar", 0],
        ["Namibia", 4],
        ["Nauru", 0],
        ["Nepal", 0],
        ["Netherlands", 415],
        ["Netherlands Antilles", 1],
        ["New Zealand", 120],
        ["Nicaragua", 0],
        ["Niger", 2],
        ["Nigeria", 25],
        ["North Borneo", 0],
        ["Norway", 520],
        ["Oman", 0],
        ["Pakistan", 10],
        ["Palau", 0],
        ["Palestine", 0],
        ["Panama", 3],
        ["Papua New Guinea", 0],
        ["Paraguay", 1],
        ["Peru", 4],
        ["Philippines", 10],
        ["Poland", 306],
        ["Portugal", 24],
        ["Puerto Rico", 9],
        ["Qatar", 5],
        ["Romania", 307],
        ["Russia", 548],
        ["Russian Empire", 8],
        ["Rwanda", 0],
        ["Saar", 0],
        ["Saint Kitts and Nevis", 0],
        ["Saint Lucia", 0],
        ["Saint Vincent and the Grenadines", 0],
        ["Samoa", 1],
        ["San Marino", 0],
        ["São Tomé and Príncipe", 0],
        ["Saudi Arabia", 3],
        ["Senegal", 1],
        ["Serbia", 15],
        ["Serbia and Montenegro", 2],
        ["Seychelles", 0],
        ["Sierra Leone", 0],
        ["Singapore", 5],
        ["Slovakia", 36],
        ["Slovenia", 40],
        ["Solomon Islands", 0],
        ["Somalia", 0],
        ["South Africa", 86],
        ["Soviet Union", 1204],
        ["Spain", 154],
        ["Sri Lanka", 2],
        ["Sudan", 1],
        ["SS", 0],
        ["Suriname", 2],
        ["Swaziland", 0],
        ["Sweden", 652],
        ["Switzerland", 345],
        ["Syria", 3],
        ["Tajikistan", 4],
        ["Tanzania", 2],
        ["Thailand", 33],
        ["The Gambia", 0],
        ["Togo", 1],
        ["Tonga", 1],
        ["Trinidad and Tobago", 19],
        ["Tunisia", 13],
        ["Turkey", 91],
        ["Turkmenistan", 0],
        ["Tuvalu", 0],
        ["Uganda", 7],
        ["Ukraine", 129],
        ["Unified Team", 135],
        ["United Arab Emirates", 2],
        ["United States", 2827],
        ["Uruguay", 10],
        ["Uzbekistan", 32],
        ["Vanuatu", 0],
        ["Venezuela", 15],
        ["Vietnam", 4],
        ["Virgin Islands", 1],
        ["Yemen", 0],
        ["Yemen North", 0],
        ["Yemen South", 0],
        ["Yugoslavia", 94],
        ["Zambia", 2],
        ["Zimbabwe", 8]
      ]);

      var options = {};
       
      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
    }
  }

  getCountries(): void {
    this.countryService.getCountries()
        .subscribe(countries => this.countries = countries);
  }

}
