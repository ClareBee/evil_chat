module ApplicationHelper
  def component(component_name, locals = {}, &block)
    name = component_name.split("-").first
    render("components/#{component_name}/#{component_name}", locals, &block)
  end

  alias c component
end
