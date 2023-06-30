class Weather {
  constructor(city, state) {
    this.apiKey = '45e4dc0f72a03033b8e0d947ad6786bf'
    this.city = city
    this.state = state
  }

  async getWeather() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);
    if (res.ok) {
      const data = await res.json();
      return data;
    }else{
      throw Error(res.status)
    }
  }

  changeLocation(city, state) {
    this.city = city
    this.state = state
  }
}