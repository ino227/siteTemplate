# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://atlas.hashicorp.com/search.
  config.hostmanager.enabled = true
  config.hostmanager.manage_host = true
  config.vm.define "development.local" do |node|
    node.vm.box = "keisuke/centos64"
    node.exec.commands '*', directory: '/var/www/html'

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  #config.vm.network "private_network", ip: "192.168.33.10"
  #config.vm.network "private_network", type: "dhcp"

  node.vm.network "private_network", ip: "192.168.33.10"
  #node.vm.network :private_network, id: "default-network", type: "dhcp", ip: "192.168.34.1", dhcp_lower: "192.168.34.3", dhcp_upper: "192.168.34.254"
  node.vm.network :forwarded_port, guest: 22, host: 2222, id: 'ssh', auto_correct: true

  node.hostmanager.ip_resolver = proc do |vm, resolving_vm|
    ip_address = ''
    if hostname = (vm.ssh_info && vm.ssh_info[:host])
      vm.communicate.execute("/sbin/ifconfig eth1 | grep 'inet addr' | tail -n 1 | egrep -o '[0-9\.]+' | head -n 1 2>&1") do |type, contents|
        ip_address = contents.split("\n").first
      end
    end
    ip_address
  end

  #config.vm.hostname = "vm-node"
  node.hostmanager.aliases = ["development.local"]
  node.ssh.insert_key = false



  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
    #node.vm.synced_folder "./share_html", "/var/www/html" , type: "rsync" , rsync__exclude: [".git/", "vendor/", "node_modules/", "share_html/app/product"]
    #node.vm.synced_folder "./share_html/app/product", "/var/www/html/app/product", create:true
    #node.vm.synced_folder "./share_html", "/var/www/html" , type: "nfs"

    config.vm.synced_folder "./share_html", "/var/www/html", type: "nfs", mount_options: ["async", "nolock", "nfsvers=3", "vers=3", "tcp", "noatime", "soft", "rsize=8192", "wsize=8192"]


  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  node.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
    #メモリを1GB割り当てています。
     vb.memory = "1024"
  end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Define a Vagrant Push strategy for pushing to Atlas. Other push strategies
  # such as FTP and Heroku are also available. See the documentation at
  # https://docs.vagrantup.com/v2/push/atlas.html for more information.
  # config.push.define "atlas" do |push|
  #   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  # end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.
  # config.vm.provision "shell", inline: <<-SHELL
  #   sudo apt-get update
  #   sudo apt-get install -y apache2
  # SHELL
  end
end
