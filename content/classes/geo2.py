import math

class Point():
    """
    A point in XYZ space that can be subtracted from other points to get distance
    """
    x = 0
    y = 0
    z = 0
    def __init__(self,x,y,z):
        self.x = x
        self.y = y
        self.z = z
    def distance_to(self,second_point):
        dx = self.x - second_point.x
        x2 = dx*dx

        dy = self.y - second_point.y
        y2 = dy*dy

        dz = self.z - second_point.z
        z2 = dz*dz

        return math.sqrt(x2 + y2 + z2)

class Sphere(Point):
    """
    A point with radius.
    """
    r = 0
    def __init__(self,x,y,z,r):
        super(Sphere,self).__init__(self,x,y,z)
        self.r = r
    def distance_to(self,second_sphere):
        center_distance = super(Sphere,self).distance_to(self,second_sphere)
        return center_distance - self.r - second_sphere.r
    def collides(self,second_sphere):
        return self.distance_to(second_sphere) < 0
