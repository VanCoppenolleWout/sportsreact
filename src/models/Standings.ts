export default interface Standings {
  leagueId: number
  leagueName: string
  leagueCountry: string
  leagueFlag: string
  season: number
  standings: {
    rank: number
    team: {
      name: string
      logo: string
    }
    all: {
      played: number
      win: number
      draw: number
      lose: number
      goals: {
        for: number
        against: number
      }
    }
    logo: string
    points: number
  }
}
