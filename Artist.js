class Artist {
   constructor(name, currency) {
       this.name = name;
       this.currency = currency;
       this.currentSongPrice = 0;
       this.songList = [];
       this.balance = 0;
   }

   intro() {
       return `Hi, my name is ${this.name} and I am a musician!`;
   }

   formatMoney(cents) {
       return `${(cents / 100).toFixed(2)} ${this.currency}`;
   }

   songPrice(newPrice) {
       this.currentSongPrice = newPrice;
       return `${this.name}'s price per song is ${this.formatMoney(newPrice)};`;
   }

   addSong(songName) {
       this.songList.push({
           name: songName,
           playCount: 0,
           author: this.name,
       });
   }

   playlist() {
       let list = '';
       let i = 0;
       for (const song of this.songList) {
           list += `\n${++i}. ${song.name} (${song.playCount})`;
       }
       return `${this.name}'s playlist:\n====================${list}`;
   }

   playSong(songIndex) {
       this.songList[songIndex].playCount++;
       this.balance += this.currentSongPrice;
       return `Playing song: ${this.songList[songIndex].name}.`;
   }

   fortune() {
       return `Total lifetime wealth of ${this.name} is ${this.formatMoney(this.balance)} right now!`;
   }
}

export { Artist }