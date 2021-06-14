# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :core_backend,
  ecto_repos: [CoreBackend.Repo]

# Configures the endpoint
config :core_backend, CoreBackendWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "ELJTD6elEx+8zdBHTbvdeOMjOEL5fVzJ1HUtui02v/04cDMCIAo5kNy8h+7XO+np",
  render_errors: [view: CoreBackendWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: CoreBackend.PubSub,
  live_view: [signing_salt: "ciYbl69u"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
