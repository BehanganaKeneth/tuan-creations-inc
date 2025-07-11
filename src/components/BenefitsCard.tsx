
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const BenefitsCard = () => {
  return (
    <Card className="card-african">
      <CardHeader>
        <CardTitle className="text-xl text-african-sky">Why Join TUAN?</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3 text-gray-600">
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
            <span>Be part of Africa's first fully integrated ICT innovation suite</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
            <span>Access to cutting-edge technology and innovation opportunities</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
            <span>Network with like-minded innovators across Africa</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-african-gold rounded-full mt-2 flex-shrink-0"></span>
            <span>Contribute to building Africa's technological sovereignty</span>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
