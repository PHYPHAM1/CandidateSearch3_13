// TODO: Create an interface for the Candidate objects returned by the API

export interface Candidate {
    name: string;
    username: string;
    location: string;
    avatar: string;        
    email: string;
    hmtl_url: string;      
    company: string;
    index: number;
}

export interface GithubUser {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean,
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string;
    hireable: boolean;
    bio: string;
    twitter_username: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
    updated_at: Date;
}


export interface Response {
  login: string;
  id: number;
  node_id: number;
  avatar_url: string;
  gravatar_id: number;
  url: string;
  html_url: string;
  emails_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: false,
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: false,
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
  private_gists: number;
  total_private_repos: number;
  owned_private_repos: number;
  disk_usage: number;
  collaborators: number;
  two_factor_authentication: boolean;
  plan: {
    name: string,
    space: number,
    private_repos: number,
    collaborators: number
  }
}