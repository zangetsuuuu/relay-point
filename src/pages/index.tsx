import { Layout } from '@/components/layout';
import { Button } from '@nextui-org/button';
import { Card, CardBody } from '@nextui-org/card';
import { Divider } from '@nextui-org/react';
import { Link } from '@nextui-org/link';
import { apiList } from '@/data';

const Home = () => {
  return (
    <Layout title="Home">
      <div className="space-y-4">
        {apiList.map((api, index) => (
          <Card key={index} radius="sm">
            <CardBody>
              <div className="p-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {api.icon}
                    <h1 className="text-lg font-medium lg:text-xl">{api.title}</h1>
                  </div>
                  <Button
                    as={Link}
                    href={api.href}
                    aria-label="Try API"
                    className="text-white bg-black dark:bg-white dark:text-black"
                    variant="shadow"
                    size="sm"
                  >
                    Try API
                  </Button>
                </div>
                <Divider className="my-3" />
                <p className="text-xs font-light leading-relaxed text-pretty text-foreground-500">
                  {api.description}
                </p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
