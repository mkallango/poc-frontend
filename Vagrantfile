VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.box = "ubuntu/trusty64"
  #config.vm.box_url = 'https://vagrantcloud.com/ubuntu/boxes/trusty64/versions/14.04/providers/virtualbox.box'
  
  config.vm.network :forwarded_port, guest: 4444, host: 4444
  config.vm.network :forwarded_port, guest: 3000, host: 3005
  #config.vm.network :private_network, ip: "192.168.33.10"
  #config.vm.provision "shell", path: "script.sh"

  config.vm.synced_folder ".", "/vagrant", disabled: false

  config.vm.provider "virtualbox" do |v|
    v.memory = 2048
    v.cpus = 2
  end

  config.vm.provision "shell", inline: 'apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6'
  config.vm.provision "shell", privileged: false, inline: 'echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list'

  config.vm.provision "shell", inline: "apt-get update"
  #config.vm.provision :docker
  
  config.vm.provision "shell", privileged: false, inline: 'curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -'  
  config.vm.provision "shell", inline: 'apt-get install -y nodejs'  
  config.vm.provision "shell", inline: 'apt-get install -y mongodb-org'
  config.vm.provision "shell", inline: 'service mongod start'

  config.vm.provision "shell", inline: 'npm install mongoose'
end
