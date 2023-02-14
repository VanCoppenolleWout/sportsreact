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
    logo: string
    points: number
  }
}
