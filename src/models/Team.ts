export default interface Team {
  team: {
    teamId: number
    teamName: string
    teamLogo: string
  }
  venue: {
    venueId: number
    venueName: string
    venueCity: string
    venueCapacity: number
  }
}
