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
    phone: "(714)500-7017",
    endpoint: "/api/submit-quote"
  },
  john: {
    name: "John Miller",
    email: "johnm@vistapacificcapital.com",
    phone: "(714)500-7018",
    endpoint: "/api/submit-quote"
  }
};