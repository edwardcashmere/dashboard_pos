defmodule CoreBackend.Repo do
  use Ecto.Repo,
    otp_app: :core_backend,
    adapter: Ecto.Adapters.Postgres
end
