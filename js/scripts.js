function adicao(x, y) {
    return x + y;
  }
    function subtracao(x,y){
        return x - y
    }

  describe('adicao function', function () {
    it('2 + 2 should equal 4', function () {
      expect(adicao(2,2)).toBe(4);

      
    })
  });
  describe('subtracao function', function (){
    it ('19 - 8 should equal 11', function (){
        expect(subtracao(19,8)).toBe(11);
    })
  });