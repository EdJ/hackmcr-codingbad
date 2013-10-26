# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure("2") do |config|
  config.vm.box = "precise64"
  config.vm.box_url = "http://files.vagrantup.com/precise64.box"

  config.vm.network :forwarded_port, guest: 1234, host: 1234

  config.vm.synced_folder "../hackmcr-codingbad-node", "/home/vagrant/workspace/travelator"

  config.berkshelf.enabled = true

  config.vm.provision :chef_solo do |chef|
    chef.cookbooks_path = "cookbooks"
    chef.add_recipe("git")
    chef.add_recipe("nodejs::install_from_package")
    chef.provisioning_path = "/var/chef/cookbooks"
  end
end