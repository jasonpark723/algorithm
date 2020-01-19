class btNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None


class bts:
    def __init__(self):
        self.root = None

    def add(self, val):
        if (self.root == None):
            self.root = btNode(val)
            return self


bts = bts()
bts.add(3)
print(bts)
