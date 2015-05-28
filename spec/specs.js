describe('belowFour', function() {
  it("returns the roman numeral for any number below 4", function() {
    expect(belowFour(3)).to.eql("III");
  });
});

describe('fourToEight', function() {
  it("returns the roman number for 4", function() {
      expect(fourToEight(4)).to.eql("IV");
  });
  it("returns the roman number for 5", function() {
    expect(fourToEight(5)).to.eql("V");
  });
  it("returns the roman number for 6", function() {
    expect(fourToEight(6)).to.eql("VI");
  });
  it("returns the roman number for 8", function() {
    expect(fourToEight(8)).to.eql("VIII");
  });
});