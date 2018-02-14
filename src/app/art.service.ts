import { Injectable } from '@angular/core';

@Injectable()
export class ArtService {

  constructor() { }
  localItems = [];
  items = [
    {
      'id': 1,
      'artist': 'Liselott Toreborg Lindberg',
      'name': 'Blåmes på tall',
      'tech': 'Keramik',
      'value': 700
    },
    {
      'id': 2,
      'artist': 'Cecilia Haupt',
      'name': 'Utan titel',
      'tech': 'Trä, olja',
      'value': 2400
    },
    {
      'id': 3,
      'artist': 'Josep Bofill',
      'name': 'Dus ponts',
      'tech': 'Brons, plexi',
      'value': 7000
    },
    {
      'id': 4,
      'artist': 'Geraldine Duijens',
      'name': 'Flicka med röd mun',
      'tech': 'Plexi',
      'value': 3000
    },
    {
      'id': 5,
      'artist': 'Våge Bodin',
      'name': 'Halsband med korp',
      'tech': 'Titan',
      'value': 950
    },
    {
      'id': 6,
      'artist': 'Marianne Tan',
      'name': 'Duk Kaprifol',
      'tech': 'Textil',
      'value': 1800
    },
    {
      'id': 7,
      'artist': 'Karin Munkhammar',
      'name': 'Fashionista',
      'tech': 'Keramik, metall',
      'value': 3100
    },
    {
      'id': 8,
      'artist': 'Jennie Olofsson/Big Pink',
      'name': 'Glasfat',
      'tech': 'Glas',
      'value': 900
    },
    {
      'id': 9,
      'artist': 'David Marshall',
      'name': 'Ljusstake',
      'tech': 'Aluminium',
      'value': 2300
    },
    {
      'id': 10,
      'artist': 'Rita Hedelin',
      'name': 'Hemligheten',
      'tech': 'Rispapper, blandteknik',
      'value': 2900
    },
    {
      'id': 11,
      'artist': 'Sebastian Grönwall',
      'name': 'Sidensvans',
      'tech': 'Oljemålning på kalksten',
      'value': 3500
    },
    {
      'id': 12,
      'artist': 'Jaquline Schäfer',
      'name': 'Birdie',
      'tech': 'Harts',
      'value': 1900
    },
    {
      'id': 13,
      'artist': 'Lotta Marie Eriksson',
      'name': 'Oljelampa',
      'tech': 'Rakukeramik',
      'value': 1800
    },
    {
      'id': 14,
      'artist': 'Ulla Ahlby',
      'name': 'Smidesljusstake',
      'tech': 'Svartgods',
      'value': 1300
    },
    {
      'id': 15,
      'artist': 'Veronique Fievre',
      'name': 'Bretagne (Original)',
      'tech': 'Olja',
      'value': 6500
    },
    {
      'id': 16,
      'artist': 'Mimmi Blomqvist',
      'name': 'Vid palmen',
      'tech': 'Pärlemorpapper, plexi',
      'value': 4000
    },
    {
      'id': 17,
      'artist': 'Mari Rantanen',
      'name': 'I solen',
      'tech': 'Screentryck',
      'value': 2484
    },
    {
      'id': 18,
      'artist': 'Anders Hugo',
      'name': 'Sydländskt landskap',
      'tech': 'Litografi',
      'value': 2065
    },
    {
      'id': 19,
      'artist': 'Lars Eje Larsson',
      'name': 'Blue suit',
      'tech': 'Litografi',
      'value': 2065
    },
    {
      'id': 20,
      'artist': 'Andre Lundqvist',
      'name': 'Layers',
      'tech': 'Art print',
      'value': 4500
    },
    {
      'id': 21,
      'artist': 'Robert Hilmersson',
      'name': 'Balansera',
      'tech': 'Mixed media',
      'value': 6400
    },
    {
      'id': 22,
      'artist': 'Ulf Gripenholm',
      'name': 'Kvinna i fåtölj',
      'tech': 'Litografi',
      'value': 3919
    },
    {
      'id': 23,
      'artist': 'Minacho Masui',
      'name': 'Rymdtulpan',
      'tech': 'Litografi',
      'value': 3869
    },
    {
      'id': 24,
      'artist': 'Karin Petri-Wennström',
      'name': 'Vitsippskog',
      'tech': 'Collografi fotopolymer',
      'value': 2166
    },
    {
      'id': 25,
      'artist': 'Tommy Östman',
      'name': 'Sandviken',
      'tech': 'Akvarell',
      'value': 2500
    },
    {
      'id': 26,
      'artist': 'Robert Hilmersson',
      'name': 'Far away',
      'tech': 'Mixed media',
      'value': 2500
    },
    {
      'id': 27,
      'artist': 'Pia Nilert',
      'name': 'Zebror',
      'tech': 'Litografi',
      'value': 1821
    },
    {
      'id': 28,
      'artist': 'Barbara Bezina',
      'name': 'Fields',
      'tech': 'Foto, digital',
      'value': 4500
    },
    {
      'id': 29,
      'artist': 'Birgitta Brorström',
      'name': 'Tropisk blomma',
      'tech': 'Litografi',
      'value': 3776
    },
    {
      'id': 30,
      'artist': 'Juan Cano',
      'name': 'Kräftan (Original)',
      'tech': 'Grafik',
      'value': 6700
    },
    {
      'id': 31,
      'artist': 'My Jansson',
      'name': 'Vespa',
      'tech': 'Fotokonst',
      'value': 2200
    },
    {
      'id': 32,
      'artist': 'Jef Poldevaart',
      'name': 'Annelise',
      'tech': 'Foto, plexi',
      'value': 4000
    },
    {
      'id': 33,
      'artist': 'Patrick Cornee',
      'name': 'Dans',
      'tech': 'Pärlemorpapper, plexi',
      'value': 4000
    },
    {
      'id': 34,
      'artist': 'Frank Björklund',
      'name': 'Kubistisk skörd',
      'tech': 'Litografi',
      'value': 2466
    },
    {
      'id': 35,
      'artist': 'Charlotte Smitterberg',
      'name': 'Man i kvällsljus',
      'tech': 'Gicleetryck',
      'value': 1200
    },
    {
      'id': 36,
      'artist': 'Torsten Erasmie',
      'name': 'Gröna män',
      'tech': 'Litografi',
      'value': 1400
    },
    {
      'id': 37,
      'artist': 'Hans Fägrell',
      'name': 'Blå dörr',
      'tech': 'Foto',
      'value': 700
    },
    {
      'id': 38,
      'artist': 'Mimmi Blomqvist',
      'name': 'Hats',
      'tech': 'Pärlemorpapper, plexi',
      'value': 4000
    },
    {
      'id': 39,
      'artist': 'Barbara Bezina',
      'name': 'Bird',
      'tech': 'Foto, digital, plexi',
      'value': 3500
    },
    {
      'id': 40,
      'artist': 'Monica Ullmark',
      'name': 'Stilla Vatten',
      'tech': 'Akvarell',
      'value': 1200
    },
    {
      'id': 41,
      'artist': 'Harald Brink',
      'name': 'Town',
      'tech': 'Fotokonst',
      'value': 1300
    },
    {
      'id': 42,
      'artist': 'Mandersohn',
      'name': 'Utan titel',
      'tech': 'Akryl',
      'value': 3000
    },
    {
      'id': 43,
      'artist': 'Hans Fägrell',
      'name': 'Sydafrikansk danserska',
      'tech': 'Olja',
      'value': 1500
    },
    {
      'id': 44,
      'artist': 'Okänd',
      'name': 'Bianca & Jagger (Limiterad upplaga, 50st hela världen)',
      'tech': 'Foto',
      'value': 4800
    },
    {
      'id': 45,
      'artist': 'Puppet/Daniel Blomqvist',
      'name': 'Wanna play?',
      'tech': 'Litografi',
      'value': 2816
    },
    {
      'id': 46,
      'artist': 'Elisabeth Jansson',
      'name': 'Tre damer',
      'tech': 'Litografi',
      'value': 2641
    },
    {
      'id': 47,
      'artist': 'Annika Zetterström',
      'name': 'Antydan',
      'tech': 'Litografi',
      'value': 1732
    },
    {
      'id': 48,
      'artist': 'Ann-Marie Löf',
      'name': 'Utan titel',
      'tech': 'Akvarell',
      'value': 2600
    },
    {
      'id': 49,
      'artist': 'Arne Andersson',
      'name': 'Gränd',
      'tech': 'Olja',
      'value': 2500
    },
    {
      'id': 50,
      'artist': 'Bo Eriksson',
      'name': 'Ko porträtt',
      'tech': 'Olja',
      'value': 800
    },
    {
      'id': 51,
      'artist': 'Puppet/Daniel Blomqvist',
      'name': 'Collector',
      'tech': 'Litografi',
      'value': 2073
    },
    {
      'id': 52,
      'artist': 'Barbara Bezina',
      'name': 'Floral Thoughts',
      'tech': 'Foto, digital, plexi',
      'value': 4500
    },
    {
      'id': 53,
      'artist': 'Barbara Bezina',
      'name': 'Roses',
      'tech': 'Foto, digital, plexi',
      'value': 4000
    },
    {
      'id': 54,
      'artist': 'Hans Fägrell',
      'name': 'Lamm',
      'tech': 'Foto',
      'value': 700
    },
    {
      'id': 55,
      'artist': 'Jeanette Lindström',
      'name': 'Le voyageur',
      'tech': 'Litografi',
      'value': 1300
    },
    {
      'id': 56,
      'artist': 'Harriet Cederqvist',
      'name': 'Silvertärna',
      'tech': 'Foto',
      'value': 900
    },
    {
      'id': 57,
      'artist': 'Helena Andreeff',
      'name': 'Morgontrumma',
      'tech': 'Grafik ',
      'value': 2023
    },
    {
      'id': 58,
      'artist': 'Malin Ekstrom',
      'name': '2 st trädgårdsfågel på pinne',
      'tech': 'Keramik',
      'value': 900
    },
    {
      'id': 59,
      'artist': 'Pere Vilardebo Miro',
      'name': 'My car (Original)',
      'tech': 'Foto collage',
      'value': 4000
    },
    {
      'id': 60,
      'artist': 'Ulla-Karin Winter',
      'name': 'Med hopp om',
      'tech': 'Fotopolymer',
      'value': 2023
    },
    {
      'id': 61,
      'artist': 'Kersti Söderström-Ergon',
      'name': 'Gift',
      'tech': 'Linoleum',
      'value': 2048
    },
    {
      'id': 62,
      'artist': 'Laura Bofill',
      'name': 'Amarillo',
      'tech': 'Foto, akryl resin',
      'value': 4500
    },
    {
      'id': 63,
      'artist': 'Leif Hansson',
      'name': 'Utan titel',
      'tech': 'Olja',
      'value': 2500
    },
    {
      'id': 64,
      'artist': 'Emma Vistrand',
      'name': 'Hand',
      'tech': 'Foto',
      'value': 2000
    },
    {
      'id': 65,
      'artist': 'Sara Asterborg ',
      'name': 'Blessings in disquise',
      'tech': 'Mixed media',
      'value': 600
    }
  ];

  getItems() {
    if (!localStorage.getItem('artItems')) {
      localStorage.setItem('artItems', JSON.stringify(this.items));
    } else {
      this.localItems = JSON.parse(localStorage.getItem('artItems'));
    }
    return this.localItems;
  }

  checkItem(item) {
    item.checked = !item.checked;
    console.log(item);
    this.save();
  }

  star(item, rating) {
    if (rating === 1 && item.stars === 1) {
      item.stars = 0;
    } else {
      item.stars = rating;
    }

    this.save();
  }

  private save() {
    localStorage.setItem('artItems', JSON.stringify(this.localItems));
  }

}
