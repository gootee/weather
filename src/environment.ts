enum Environments {
  local_environment = 'local',
  dev_environment = 'dev',
  prod_environment = 'prod',
  qa_environment = 'qa'
}

class Environment {
  private environment: String  

  constructor(environment: String) {
    this.environment = environment
  }

  getEnvironment(): String {
    if (this.environment === Environments.prod_environment) {
        return "prod"
    } else if (this.environment === Environments.dev_environment) {
      return "dev"
    } else if (this.environment === Environments.qa_environment) {
      return "qa"
    } else {
      return "local"
    }
  }

  getKey(): string {
    const apiKey: string | undefined = process.env.OPEN_WEATHER_MAP_API_KEY
    return apiKey ? apiKey : ""
  }
}

export default new Environment(Environments.local_environment)