// types/User.ts

export type GitHubUser = {
  avatar_url: string;
  bio: string;
  blog: string | null; // Since it's either a string or null
  company: string | null;
  created_at: string; // ISO 8601 format; consider using Date if you want to handle dates
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null; // Nullable
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string; // e.g., "User"
  updated_at: string; // ISO 8601 format; consider using Date if you want to handle dates
  url: string;
  user_view_type: string; // e.g., "public"
  documentation_url: string;
  message: string;
};
