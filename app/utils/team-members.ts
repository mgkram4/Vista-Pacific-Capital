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
  johnMirabal: {
    name: "John Mirabal",
    email: "johnm@vistapacificcapital.com",
    phone: "(714)551-9955",
    endpoint: "/api/submit-quote"
  },
  ianWhitelaw: {
    name: "Ian Whitelaw",
    email: "ianw@vistapacificcapital.com",
    phone: "(714) 408-4574",
    endpoint: "/api/submit-quote"
  }
};