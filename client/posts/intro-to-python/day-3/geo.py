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
        if second_point.__class__ != self.__class__:
            raise TypeError("Method distance_to requires a second point as an argument")

        dx = self.x - second_point.x
        x2 = dx*dx

        dy = self.y - second_point.y
        y2 = dy*dy

        dz = self.z - second_point.z
        z2 = dz*dz

        return math.sqrt(x2 + y2 + z2)

origin = Point(0,0,0)

points = [
    Point(1,1,1),
    Point(1,2,3),
    Point(3,2,4),
    Point(0,0,1),
]

for point in points:
    print "Point is " + str(origin.distance_to(point)) + " from the origin"
