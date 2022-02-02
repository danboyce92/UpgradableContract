const Dogs = artifacts.require('Dogs');
const DogsUpdated = artifacts.require('DogsUpdated');
const Proxy = artifacts.require('Proxy');

module.exports = async function(deployer, network, accounts) {
  //Deploy contract
  const dogs = await Dogs.new();
  const proxy = await Proxy.new(dogs.address);

  //Create proxy to fool truffle
  var proxyDog = await Dogs.at(proxy.address);
  //Set nr of dogs through the proxy
  await proxyDog.setNumberOfDogs(10);
  //Tested
  var nrOfDogs = await proxyDog.getNumberOfDogs();
  console.log("Before update: " + nrOfDogs.toNumber());

  const dogsUpdated = await DogsUpdated.new();
  proxy.upgrade(dogsUpdated.address);

  nrOfDogs = await proxyDog.getNumberOfDogs();
  console.log("After update: " + nrOfDogs.toNumber());

  //Set nr of dogs through the New Functional contract
  await proxyDog.setNumberOfDogs(30);

}
