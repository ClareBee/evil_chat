/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

// importing registers the contents of a folder/file
import "init";
import "components/page/page";
import "components/auth-form/auth-form";
import "components/chat/chat";
// turbolinks and ujs linked to sprockets therefore need to be reinstalled
import Turbolinks from "turbolinks";
import Rails from "rails-ujs";

Turbolinks.start();

Rails.start();
