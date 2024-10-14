export interface Project {
    id: string;
    name: string;
    screenshot_url: string;
    url: string;
    build_settings: {
        repo_url: string;
    };
}