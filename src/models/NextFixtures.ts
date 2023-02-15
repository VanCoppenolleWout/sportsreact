export default interface NextFixtures {
  fixtureId: number
  date: string
  venue: {
    name: string
    city: string
  }
  league: {
    name: string
    logo: string
  }
  teams: {
    home: {
      name: string
      logo: string
    }
    away: {
      name: string
      logo: string
    }
  }
  goals: {
    home: number
    away: number
  }
}
