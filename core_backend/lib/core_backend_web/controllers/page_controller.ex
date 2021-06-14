defmodule CoreBackendWeb.PageController do
  use CoreBackendWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
