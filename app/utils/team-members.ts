// Team member configuration
export interface TeamMember {
  name: string;
  email: string;
  phone: string;
  endpoint: string;
}

// Default team members that can be imported by any component
export const TEAM_MEMBERS = {
  alan: {
    name: "Alan Johnson",
    email: "alanj@vistapacificcapital.com",
    phone: "(949)677-1167",
    endpoint: "/api/submit-quote"
  },
  noah: {
    name: "Noah Miller",
    email: "noahm@vistapacificcapital.com",
    phone: "(949)413-5942",
    endpoint: "/api/submit-quote-noah"
  }
}; 